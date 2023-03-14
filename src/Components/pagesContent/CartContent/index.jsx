import { useState } from "react";
import {Row, Col, Card, Table, Button} from 'antd';


const CartContent = () => {


    const columns=[

        
    {
        title: "Producto",
        dataIndex:"name",
        key:"id",

    },
    {
        title: "Precio",
        dataIndex:"price",
        key:"id",

    } ,  
    {
        title: "Cantidad",
        dataIndex:"cantidad",
        key:"id",

    },   
    {
        title: "Subtotal",
        dataIndex:"Subtotal",
        key:"id",

    }      

    ] 



    const data = [
        {
            "id":"01",
            "name":"White & Gray & Black – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/blanco-300x300.webp",
            "alt": "Esmalte 01",
            "price":"6800",
            "category": "Esmalte",
            "desc": "Prueba 01"
        },
        {
            "id":"02",
            "name":"Rose Red – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/rose-300x300.webp",
            "alt": "Esmalte 02",
            "price":"6500",
            "category": "Esmalte",
            "desc": "Prueba 02"
        },
        {
            "id":"03",
            "name":"Gold & Yellow – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/oro_amarillo-300x300.webp",
            "alt": "Esmalte 03",
            "price":"6800",
            "category": "Esmalte",
            "desc": "Prueba 03"
        },
        {
            "id":"04",
            "name":"Red – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/rojo-300x300.webp",
            "alt": "Esmalte 04",
            "price":"6500",
            "category": "Esmalte",
            "desc": "Prueba 04"
        }
        
    ]

    return (

       <div className="container container-p">
            <Table columns={columns} dataSource={data}/> 
            <Button className="background-red white-color "> Finalizar Compra</Button>  
      </div>
        
 
        )
}

export default CartContent;