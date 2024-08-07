import { Body, Controller, Get, Param, Post } from "@nestjs/common";


@Controller('usuarios')
export class UsuarioController{
    private usuarios = [];

    @Post()
    async create(@Body() body){
        this.usuarios.push(body);
        return {body};
    }

    @Get(':id')
    async readOne(@Param() params){
        return {usuarios:{}, params}
    }

    @Get()
    async findAllUsuarios(){
        return this.usuarios; // aaa
    }
}