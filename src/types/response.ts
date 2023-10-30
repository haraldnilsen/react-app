export interface GymElement {
  picture: string;
  name: string;
  about: string;
  address: string;
  moonboard: string;
  kilterboard: string;
  homepage: string;
  city: string;
}

export interface ClimbElement {
  climbType: string;
  grade: string;
  date: string;
  id: number;
}

export interface GradeElement {
  grade_type: string;
  grade: string;
  value: number;
}
