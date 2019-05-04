import { Coms } from "./coms";
import { Pages } from "./pages";
import { StatusState } from "./status";
import { Settings } from "./settings";


export interface Work {
  coms: Coms
  pages: Pages
  settings: Settings
}

interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isAuthenticated: boolean
  },
  work: Work
  status: StatusState
}

export default IStoreState