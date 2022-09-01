import { UserVisualData } from '../../model/type/User';
import { Apply, ApplyWithUser } from '../../model/type/type';

export function createAppliesWithUser(users: UserVisualData[], applies :Apply[]) {
  const appliesWithUser: ApplyWithUser[] = [];
  applies.forEach(apply => {
    const user = users.find(u => apply.userId === u.id);
    appliesWithUser.push({
      ...apply,
      name: user?.name as string,
      avatar: user?.avatar as string,
    });
  });
  return appliesWithUser;
}