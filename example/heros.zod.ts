// Generated by ts-to-zod
import { z } from "zod";
import { Villain } from "./heros";

export const enemySchema = z.object({
  name: z.string(),
  powers: z.array(z.string()),
  inPrison: z.boolean(),
});

export const supermanSchema = z.object({
  name: z.union([
    z.literal("superman"),
    z.literal("clark kent"),
    z.literal("kal-l"),
  ]),
  enemies: z.record(enemySchema),
  age: z.number(),
  underKryptonite: z.boolean().optional(),
});

export const villainSchema: z.ZodSchema<Villain> = z.lazy(() =>
  z.object({
    name: z.string(),
    powers: z.array(z.string()),
    friends: z.array(villainSchema),
  })
);

export const storySchema = z.tuple([z.string(), z.array(z.string())]);

export const krytonResponseSchema = z.promise(z.boolean());

export const killSupermanSchema = z
  .function()
  .args(z.boolean(), z.string())
  .returns(z.promise(z.boolean()));

export const withDefaultsSchema = z.object({
  theAnswerToTheUltimateQuestionOfLife: z.number().default(42),
  isVulnerable: z.boolean().default(false),
  name: z
    .union([z.literal("clark"), z.literal("superman"), z.literal("kal-l")])
    .default("clark"),
  theMeaningOf42: z
    .string()
    .default("The Answer to the Ultimate Question of Life"),
  emptyString: z.string().optional().default(""),
  booleanAsString: z.string().default("true"),
});

const nonExportedSchema = z.object({
  name: z.string(),
});

export const exportedSchema = z.object({
  a: nonExportedSchema,
  b: z.string(),
});
