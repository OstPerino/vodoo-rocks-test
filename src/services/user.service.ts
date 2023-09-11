import $api from "@/api";
import IUser from "@/types/user.type";
import { AxiosResponse } from "axios";

export async function fetchUser(userId: number | string): Promise<AxiosResponse<IUser>> {
    return $api.get(`/users/${userId}`);
}