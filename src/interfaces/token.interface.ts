import { RoleEnum } from "../enums/role.enum";

interface IToken {
    _id: string;
    accessToken: string;
    refreshToken: string;
    _userId: string;
}

type ITokenModel = Pick<IToken, "accessToken" | "refreshToken" | "_userId">;

interface ITokenPayload {
    userId: string;
    role: RoleEnum;
}

type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;

type IRefresh = Pick<IToken, "refreshToken">;

export { IRefresh, IToken, ITokenModel, ITokenPair, ITokenPayload };
