export * from "./types";
import type { CurriculumBlock } from "./types";
import { curriculum as juniorExplorer } from "./junior-explorer";
import { curriculum as explorer } from "./explorer";
import { curriculum as builderPythonCore } from "./builder-python-core";
import { curriculum as builderFastapi } from "./builder-fastapi";
import { curriculum as builderFullstack } from "./builder-fullstack";
import { curriculum as proTrack } from "./pro-track";
import { curriculum as studyAbroadPrep } from "./study-abroad-prep";
import { curriculum as juniorExplorerId } from "./id/junior-explorer";
import { curriculum as explorerId } from "./id/explorer";
import { curriculum as builderPythonCoreId } from "./id/builder-python-core";
import { curriculum as builderFastapiId } from "./id/builder-fastapi";
import { curriculum as builderFullstackId } from "./id/builder-fullstack";
import { curriculum as proTrackId } from "./id/pro-track";
import { curriculum as studyAbroadPrepId } from "./id/study-abroad-prep";

export type CurriculumLocale = "id" | "en";

const programIds = [
  "junior-explorer",
  "explorer",
  "builder-python-core",
  "builder-fastapi",
  "builder-fullstack",
  "pro-track",
  "study-abroad-prep",
] as const;

export type ProgramCurriculumId = (typeof programIds)[number];

const curriculaEn: Record<ProgramCurriculumId, CurriculumBlock[]> = {
  "junior-explorer": juniorExplorer,
  explorer: explorer,
  "builder-python-core": builderPythonCore,
  "builder-fastapi": builderFastapi,
  "builder-fullstack": builderFullstack,
  "pro-track": proTrack,
  "study-abroad-prep": studyAbroadPrep,
};

const curriculaId: Record<ProgramCurriculumId, CurriculumBlock[]> = {
  "junior-explorer": juniorExplorerId,
  explorer: explorerId,
  "builder-python-core": builderPythonCoreId,
  "builder-fastapi": builderFastapiId,
  "builder-fullstack": builderFullstackId,
  "pro-track": proTrackId,
  "study-abroad-prep": studyAbroadPrepId,
};

/** English curricula — default for existing `programs.ts` consumers */
export const curriculaByProgramId = curriculaEn;

export function getCurriculum(
  locale: CurriculumLocale,
  programId: string,
): CurriculumBlock[] {
  const map = locale === "id" ? curriculaId : curriculaEn;
  if (programId in map) {
    return map[programId as ProgramCurriculumId];
  }
  return [];
}
