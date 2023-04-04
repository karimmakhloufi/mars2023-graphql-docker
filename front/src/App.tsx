import { useQuery, gql } from "@apollo/client";
import "./App.css";
import Wilder, { IWilderProps } from "./components/Wilder";
import AddGradeForm from "./components/AddGradeForm";
import AddWilderForm from "./components/AddWilderForm";

interface ISkillFromAPI {
  id: number;
  name: string;
}

interface IGradeFromAPI {
  grade: number;
  skill: ISkillFromAPI;
}

interface IWilderFromAPI {
  name: string;
  id: number;
  grades: IGradeFromAPI[];
}

const GET_WILDERS = gql`
  query GetWilders {
    wilders {
      id
      name
      grades {
        grade
        skill {
          name
        }
      }
    }
  }
`;

const formatWildersFromApi = (wilders: IWilderFromAPI[]): IWilderProps[] =>
  wilders.map((wilder) => {
    return {
      id: wilder.id,
      name: wilder.name,
      skills: wilder.grades.map((grade) => {
        return { votes: grade.grade, title: grade.skill.name };
      }),
    };
  });

function App() {
  const { loading, error, data } = useQuery(GET_WILDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const wilders = formatWildersFromApi(data.wilders);
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddGradeForm />
        <AddWilderForm />
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                id={wilder.id}
                skills={wilder.skills}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2023 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
