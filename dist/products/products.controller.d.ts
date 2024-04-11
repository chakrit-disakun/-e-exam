import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("./schemas/product.schemas").Product>;
    findAll(): Promise<import("./schemas/product.schemas").Product[]>;
    findOne(id: string): Promise<import("./schemas/product.schemas").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("./schemas/product.schemas").Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
