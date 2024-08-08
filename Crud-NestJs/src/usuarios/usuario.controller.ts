import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";


@Controller('usuarios')
export class UsuarioController{
    private usuarios = [];

    @Get(':id')
    async readOne(@Param() params){
        return {usuarios:{}, params}
    }

    @Get()
    async findAllUsuarios(){
        return this.usuarios;
    }

    @Post()
    async create(@Body() body){
        this.usuarios.push(body);
        return {body};
    }

    @Put(':id')
    async update(@Body() body, @Param() params){
        return{
            method: 'put',
            body,
            params
        }
    }

    @Patch(':id')
    async updatePatch(@Body() body, @Param() params){
        return{
            method: 'patch',
            body,
            params
        }
    }
}