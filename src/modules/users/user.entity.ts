import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { defaultNameLength } from 'src/common/constants/common.constants';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: defaultNameLength })
  name: string;

  @Exclude()
  @Column({ nullable: true })
  password: string;

  @Exclude()
  @Column({ nullable: true })
  salt: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  async validatePassword(password: string): Promise<boolean> {
    const hashPassword = await bcrypt.compare(password, this.password);
    return hashPassword;
  }
}
