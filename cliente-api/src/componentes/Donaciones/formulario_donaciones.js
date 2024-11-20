import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

const formulario_donaciones = () => {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        empresa: "",
        descripcion: "",
        articulo: "",
        fecha_enbalaje: "",
        direccion: "",
        imagen: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch("http://localhost:7000/donaciones", {
                method: "POST",
                body: formDataToSend,
            });
            const data = await response.json();
            alert("Donación enviada con éxito: " + JSON.stringify(data));
        } catch (error) {
            console.error("Error al enviar la donación:", error);
            alert("Hubo un problema al enviar la donación.");
        }
    };

    return (
        <div>
            <h1>Formulario de Donaciones</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombres"
                    placeholder="Nombre(s)"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellido(s)"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                />
                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="articulo"
                    placeholder="Artículo"
                    value={formData.articulo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="fecha_enbalaje"
                    value={formData.fecha_enbalaje}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button type="submit">Enviar Donación</button>
            </form>
        </div>
    );
};

export default formulario_donaciones;