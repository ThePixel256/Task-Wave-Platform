import {IHashingService} from "../../../../application/internal/outboundservices/IHashingService";
import bcrypt from 'bcrypt';

export class HashingService implements IHashingService {
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}