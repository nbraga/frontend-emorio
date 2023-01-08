export interface ParticipantsProps {
  id: number;
  name: string;
  office: string;
  description: string;
  image: string;
}

export interface PartnershipProps {
  id: number;
  name: string;
  office: string;
  image: string;
}

export interface TeamProps {
  id?: number;
  name: string;
  office: string;
  instagram?: string;
  github: string;
  linkedin: string;
  image: string;
}
