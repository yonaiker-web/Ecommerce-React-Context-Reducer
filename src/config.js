//exporamos una configuracion para mostrar cosas en el ambiente de dev

export const IS_DEVELOPMENT = process.env.NODE_ENV !== "production";

console.log("entorno", process.env.NODE_ENV);
