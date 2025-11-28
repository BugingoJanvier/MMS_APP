import { Injectable } from '@nestjs/common';
import { carTable } from './car_table.model';
import { AddCarDto, UpdateCarDto } from './dto/car_table.dto';

@Injectable()
export class CarTableService {
    private cars: carTable[] = [];

    constructor() {};

    async create(dto: AddCarDto): Promise<carTable> {
        const {plateNumber, model, peoplePlace,startDate, startingKm, dateOfManufacture,} = dto;
        const newCar: carTable = {
            plateNumber, 
            model, 
            peoplePlace,
            startDate,
            startingKm,
            dateOfManufacture,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.cars.push(newCar);
        return newCar;
    }

    async findOne(plateNumber: string): Promise<carTable | null> {
        return this.cars.find(car => car.plateNumber === plateNumber) || null;
    }

    async update(dto: UpdateCarDto): Promise<carTable> {
        const {plateNumber, model, peoplePlace,startDate, startingKm, dateOfManufacture,} = dto;
        const car = await this.findOne(plateNumber);
        if(!car){
            throw new Error(`Car with plate number ${plateNumber} does not exist.`);
        }
        car.model = model;
        car.peoplePlace = peoplePlace;
        car.startDate = startDate;
        car.startingKm = startingKm;
        car.dateOfManufacture = dateOfManufacture;
        car.updatedAt = new Date();
        return car;
    }

    async remove(plateNumber: string): Promise<carTable | null> {
        const car = await this.findOne(plateNumber);
        if(!car){
            throw new Error(`Car with plate number ${plateNumber} does not exist.`);
        }
        this.cars = this.cars.filter(c => c.plateNumber !== plateNumber);
        return car;
        }

    async findAll(): Promise<carTable[]> {
        return this.cars;
    }
}