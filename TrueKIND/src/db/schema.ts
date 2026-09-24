import { pgTable, text, serial, timestamp, integer, numeric, jsonb } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  volume: text("volume").notNull(),
  category: text("category").notNull(),
  range: text("range").notNull(),
  description: text("description"),
  about: text("about"),
  image: text("image"),
  image2: text("image2"),
  themeBackground: text("theme_background"),
  themeButton: text("theme_button"),
  keyIngredients: jsonb("key_ingredients"),
  ingredientsFormula: jsonb("ingredients_formula"),
  suitableFor: text("suitable_for"),
  recommendedFor: text("recommended_for"),
  usage: jsonb("usage"),
  faqs: jsonb("faqs"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscribersTable = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

export const skinQuizSubmissionsTable = pgTable("skin_quiz_submissions", {
  id: serial("id").primaryKey(),
  email: text("email"),
  name: text("name"),
  skinType: text("skin_type"),
  concerns: text("concerns"),
  routineGoal: text("routine_goal"),
  recommendedProducts: jsonb("recommended_products"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  orderNumber: text("order_number").notNull().unique(),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  shippingAddress: text("shipping_address").notNull(),
  city: text("city").notNull(),
  postalCode: text("postal_code").notNull(),
  phone: text("phone"),
  subtotal: numeric("subtotal", { precision: 10, scale: 2 }).notNull(),
  discount: numeric("discount", { precision: 10, scale: 2 }).default("0"),
  total: numeric("total", { precision: 10, scale: 2 }).notNull(),
  items: jsonb("items").notNull(),
  status: text("status").default("confirmed"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviewsTable = pgTable("reviews", {
  id: serial("id").primaryKey(),
  productSlug: text("product_slug").notNull(),
  author: text("author").notNull(),
  rating: integer("rating").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  isVerified: text("is_verified").default("true"),
  createdAt: timestamp("created_at").defaultNow(),
});
