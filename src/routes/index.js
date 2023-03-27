import userRoutes from "../domains/users/users-routes.js";
import cctvRoutes from "../domains/cctv/cctv-routes.js"


const routes = (router) => {
   router.use("/users", userRoutes);
   router.use("/cctv", cctvRoutes);
}

export default routes;
