import { Page } from "../core/page/Page";
import { $ } from "@core/dom";
import { createRecordsTable } from "../shared/dashboard.functions";

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now();
    return $.create('div', 'db').html(`
            <div class="db__header">
                <h1>Excel Dashboard</h1>
                <a
                  target="_blank"
                  href="https://github.com/Temons/excel-july-22"
                  class="db__logo"
                >
                  <img
                    src="assets/icons/github-mark.svg"
                    width="24"
                    height="24"
                    alt="Icon"
                   />
                 </a>
            </div>

            <div class="db__new">
                <div class="db__view">
                    <a href="#excel/${now}" class="db__create">
                        New 
                        <br />
                        Table
                    </a>
                </div>
            </div>

            <div class="db__table db__view">
                ${createRecordsTable()}
            </div>
        `)
  }
}
