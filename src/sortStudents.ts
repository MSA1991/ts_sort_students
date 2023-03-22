export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudent = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudent.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudent.sort((a, b) => +a[sortBy] - +b[sortBy]);
      break;

    case SortType.AverageGrade:
      sortedStudent.sort((a, b) => {
        return getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]);
      });
      break;

    default:
      break;
  }

  return order === 'desc' ? sortedStudent.reverse() : sortedStudent;
}
