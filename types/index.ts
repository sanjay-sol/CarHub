import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}
export interface SearchManufacturerProps{
    manufacturer:String;
    setmanufacturer: (manufacturer:String)=> void;
}
export interface CustomFilter{
    title?:string;
}
export interface CarProps {
  
    city_mpg:Number,
class:String,
combination_mpg:Number,
cylinders:Number,
displacement:Number,
drive:String,
fuel_type:String,
highway_mpg:Number,
make:String,
model:String,
transmission:String,
year:Number,



}

