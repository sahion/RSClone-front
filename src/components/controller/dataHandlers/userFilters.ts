import { UserVisualData } from "../../model/type/User"

export const getUsersRating = (users: UserVisualData[]) => users.sort((a,b) => b.goodThings - a.goodThings);