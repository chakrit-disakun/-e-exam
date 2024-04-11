import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schemas").Order>;
    findOne(id: string): Promise<import("./schemas/order.schemas").Order>;
}
