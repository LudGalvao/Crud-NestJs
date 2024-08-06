import { Body, Controller, Get, Post } from "@nestjs/common";


@Controller('usuarios')
export class UsuarioController{
    private usuarios = [];

    @Post()
    async create(@Body() body){
        this.usuarios.push(body);
        return {body};
    }

    @Get()
    async findAll(){
        return this.usuarios;
    }
}