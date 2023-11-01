import { enterTheRabbitHole } from "../chapter_1/chapter_1_rabbit_hole";
import { clear, print, askQuestion } from "../ui/console";

const Steps = [1, 2, 3, 4] as const;

export function getGroceries(name: string) {
  clear(false);
  print("----------------------------");
  print(
    `${name} was going for a walk, you see a white rabbit that is four steps away`
  );
  if (Steps.length < 4) {
    print("you have not reached the white rabbit yet!");
  } else {
    print("You finally come face to face with the white rabbit...");
    return askQuestion("Press ENTER to continue", enterTheRabbitHole);
  }
}
