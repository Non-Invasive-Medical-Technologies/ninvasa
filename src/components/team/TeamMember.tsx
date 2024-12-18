import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ name, role, description }: TeamMemberProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
      <div className="mb-4 flex items-center justify-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-medical-100">
          <User className="h-16 w-16 text-medical-600" />
        </div>
      </div>
      <h3 className="mb-2 text-center text-xl font-bold text-medical-900">{name}</h3>
      <p className="mb-3 text-center text-sm font-medium text-medical-600">{role}</p>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default TeamMember;