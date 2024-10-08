import { Router } from "express";
import { FAQController } from "../controllers/FaqController";
import { authMiddleware, checkPermissions } from "../middleware";
import { UserRole } from "../enums/userRoles";

const faqRouter = Router();
const faqController = new FAQController();

faqRouter.post("/faqs", authMiddleware, faqController.createFAQ);
faqRouter.patch("/faqs/:id", authMiddleware, faqController.updateFaq);

export { faqRouter };
