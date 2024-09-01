import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AmbulanceService } from './ambulance.service';
import { Response } from 'express';
import { ambulanceDTO } from './ambulance.dto';
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('ambulance')
@Controller('ambulance')

@Controller('ambulance')
export class AmbulanceController {
    constructor(
        private readonly ambulanceService: AmbulanceService
    ){}
    
    @Get()
    async findAllAmbulance(@Res() response: Response) {
        const ambulance = await this.ambulanceService.findAllAmbulance(); 
        return response.status(200).json(ambulance);
    }

    @ApiOperation({ summary: 'Create ambulance' })
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})

    // @Get(':id')
    // findAll(@Res() response: Response, @Param('id') id: string) {
    //     return response.status(200).json(this.ambulanceService.findAll());
    // }

    @Post()
    async createAmbulance(@Res() response: Response, @Body() ambulanceDTO: ambulanceDTO) {
        const createdAmbulance = await this.ambulanceService.createAmbulance(ambulanceDTO);
        return response.status(201).json(createdAmbulance);
    }
}
