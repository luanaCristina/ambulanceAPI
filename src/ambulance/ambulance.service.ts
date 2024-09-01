import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ambulance } from './ambulance.entity';     
import { ambulanceDTO } from './ambulance.dto';

@Injectable()
export class AmbulanceService {
    constructor(
        @InjectRepository(Ambulance)
        private readonly ambulanceRepository: Repository<Ambulance>,
    ){}
    async findAllAmbulance(): Promise<Ambulance[]> {
        const ambulance = await this.ambulanceRepository.find();
        if(ambulance.length === 0) {
            throw new HttpException('No ambulance found', 404);
        }
        return ambulance;
    }

    async createAmbulance(ambulanceDTO: ambulanceDTO): Promise<ambulanceDTO> {
        const createAmbulance = await this.ambulanceRepository.save(ambulanceDTO);
        return createAmbulance
    }

    // async findOne(id: string): Promise<Ambulance> {
    //     return this.ambulanceRepository.findOne(id);
    // }
}
