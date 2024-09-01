import { ApiProperty } from "@nestjs/swagger";

export class ambulanceDTO {
    readonly id?: string;
    @ApiProperty({ type: String, description: 'Name of the ambulance' })
    name: string;
    @ApiProperty({ type: String, description: 'Location of the ambulance' })    
    location: string;
    @ApiProperty({ type: String, description: 'Placa of the ambulance' })
    placa: string;
    @ApiProperty({ type: Boolean, description: 'Disponível of the ambulance' })
    disponivel: boolean;
    @ApiProperty({ type: String, description: 'Motorista of the ambulance' })
    motorista: string;
    @ApiProperty({ type: String, description: 'Paciente of the ambulance' })
    paciente: string;
    @ApiProperty({ type: String, description: 'Hospital of the ambulance' })
    hospital: string;
    @ApiProperty({ type: String, description: 'Mensagem of the ambulance' })
    mensagem: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;

   
}
