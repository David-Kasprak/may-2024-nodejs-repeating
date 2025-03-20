import { RoleEnum } from "../enums/role.enum";

interface IToken {
    _id: string;
    accessToken: string;
    refreshToken: string;
    _userId: string;
}

interface ITokenPayload {
    userId: string;
    role: RoleEnum;
}

type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;

export { IToken, ITokenPair, ITokenPayload };
