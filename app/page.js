import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
