import { Controller, Post, Body } from '@nestjs/common';

@Controller('items')
export class MyController {

    @Post()
    createItem(@Body() createItemDto: any): string {
        console.log(createItemDto);

        return 'Item created successfully';

    }

}
