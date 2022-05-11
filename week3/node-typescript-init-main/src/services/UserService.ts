import { UserCreateDto } from "../interfaces/user/UserCreateDto"
import User from "../modules/User"
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";

const createUser = async (userCreateDto: UserCreateDto) => {
    try {
        const user = new User(userCreateDto);
        await user.save();

        const data = {
            _id: user._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string , userUpdateDto: UserUpdateDto) => {
    try {
        const updateUser = {
            name: userUpdateDto.name,
            phone: userUpdateDto.phone,
            email: userUpdateDto.email,
            age: userUpdateDto.age,
            school: userUpdateDto.school
        }

        await User.findByIdAndUpdate(userId, updateUser);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string) => {
    try {
        const data: UserResponseDto | null = await User.findById(userId);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteUser = async (userId: string) => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}