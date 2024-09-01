import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'ambulances' })
export class Ambulance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'location', nullable: false})
    location: string;

    @Column({name: 'placa', nullable: false, unique: true})
    placa: string;

    @Column({name: 'disponível', nullable: false})
    disponivel: boolean;

    @Column({name: 'motorista', nullable: false})
    motorista: string;

    @Column({name: 'paciente', nullable: false})
    paciente: string;

    @Column({name: 'hospital', nullable: false})
    hospital: string;

    @Column({name: 'mensagem', nullable: false})
    mensagem: string;

    @CreateDateColumn({name: 'created_at', nullable: false})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', nullable: false})
    updatedAt: Date;

    // Add more columns as needed

    // Add relationships with other entities if necessary

    // Add any additional methods or decorators as needed
}