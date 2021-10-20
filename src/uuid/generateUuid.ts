import { v4 } from "uuid";

export default function generateUuid() {
    return v4();
}

export function generateMultiUuid(size: number): string[] {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(generateUuid());
    }
    return result;
}
