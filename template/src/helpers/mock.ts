import {
  RestRequest,
  PathParams,
  DefaultBodyType,
  ResponseComposition,
  RestContext,
} from "msw";

type Request = RestRequest<any, PathParams<string>>;
type Response = ResponseComposition<DefaultBodyType>;
type Context = RestContext;

export const json =
  (json: Object) => (req: Request, res: Response, ctx: Context) =>
    res(ctx.delay(500), ctx.json(json));

export const error =
  (status: number, error: Object) =>
  (req: Request, res: Response, ctx: Context) =>
    res(ctx.delay(500), ctx.status(status), ctx.json(error));

export const paginate =
  (items: any[]) => async (req: Request, res: Response, ctx: Context) => {
    const process = (page: number, itemsPerPage = 5) => {
      const start = itemsPerPage * Math.max(page - 1, 0);
      return {
        rows: items.slice(start, start + itemsPerPage),
        total: items.length,
      };
    };
    const { page = 1 } = await req.json();
    return res(ctx.delay(500), ctx.json(process(page)));
  };
