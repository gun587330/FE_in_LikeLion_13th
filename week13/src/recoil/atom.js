import { atom } from "recoil";

export const userNameAtom = atom({
	key: "userName",
	default: "아기사자",
});

export const emailAtom = atom({
	key: "email",
	default: "likelion@cau.ac.kr",
});

export const isSubmittedAtom = atom({
	key: "isSubmitted",
	default: false,
});

// 과제 1 > radio로 구현
export const genderAtom = atom({
	key: "gender",
	default: '',
});