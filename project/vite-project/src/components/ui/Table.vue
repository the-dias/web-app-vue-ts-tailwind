<script lang="ts">
import { ref } from "vue";
import "./styles/styles.css";

export default {
  data() {
    return {
      dataJson: {
        time: [],
        status: [],
        module: [],
        type: [],
        room: [],
        group: [],
      },
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("http://localhost:8000/");
        const text = await response.json();
        let data = JSON.parse(text);
        console.log(data);
        const newJson = {
          time: [],
          status: [],
          module: [],
          type: [],
          room: [],
          group: [],
        };
        for (const [key, value] of Object.entries(data)) {
          for (let i = 0; i < value.length; i++) {
            // console.log(value[i]);
            // newJson["time"].push(value[i]["time"]);
            // newJson["end"].push(value[i]["end"]);
            newJson.time.push(
              this.parseDate(value[i]["start"], value[i]["end"])
            );
            const status = value[i]["status"]["name"];

            if (status === "planned") {
              newJson["status"].push("Запланировано");
            } else if (status === "completed") {
              newJson["status"].push("Завершено");
            } else {
              newJson["status"].push("Идет");
            }

            // newJson["status"].push();
            newJson["module"].push(value[i]["module"]);
            newJson["type"].push(value[i]["type"]["name"]);

            let str = "";
            for (let j = 0; j < value[i]["rooms"].length; j++) {
              // console.log("rooms: " + value[i]["rooms"][0]["name"]);
              str += "Комната № " + value[i]["rooms"][j]["name"];
              if (j !== value[i]["rooms"].length - 1) str += ", ";
            }
            newJson["room"].push(str);

            str = "";
            for (let k = 0; k < value[i]["groups"].length; k++) {
              str += value[i]["groups"][k]["name"];
              if (k !== value[i]["groups"].length - 1) str += ", ";
            }
            if (str === "") str = "—";
            newJson["group"].push(str);
          }
        }
        this.dataJson = newJson;

        console.log(newJson);

        // console.log(this.dataJson);
      } catch (error) {
        console.error("Error fetching data...", error);
      }
    },

    parseDate(start: string, end: string): string {
      let from = start
        .toString()
        .substring(0, 10)
        .split("-")
        .reverse()
        .join(".");

      from +=
        ", " +
        start.toString().substring(11, 16) +
        " - " +
        end.toString().substring(11, 16);

      return from;
    },
  },
};
const currentPage = ref(0);
</script>

<template>
  <div>
    <table
      class="w-full h-[80vh] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-blue rounded-xl"
    >
      <thead
        class="bg-[#F5F7F9] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span class="mr-4">Дата и время</span>
              <a href="#">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.707951 3.71967C1.00084 3.42678 1.47572 3.42678 1.76861 3.71967L8.73828 10.6893L15.708 3.71967C16.0008 3.42678 16.4757 3.42678 16.7686 3.71967C17.0615 4.01256 17.0615 4.48744 16.7686 4.78033L9.26861 12.2803C8.97572 12.5732 8.50084 12.5732 8.20795 12.2803L0.707951 4.78033C0.415058 4.48744 0.415058 4.01256 0.707951 3.71967Z"
                    fill="#2F3144"
                    fill-opacity="0.65"
                  />
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span>Статус</span>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span>Название учебного модуля</span>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span>Тип сессии</span>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span>Комната</span>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex flex-row items-center">
              <span>Группа</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(value, key, index) in dataJson"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            
            {{ dataJson.time[index] }}
            <!-- {{ dataJson[20] }} -->
          </th>

          <td
            v-if="dataJson.status[index] === 'Запланировано'"
            class="h-3 px-6 bg-[#AFBFF5] rounded-[43px]"
          >
            {{ dataJson.status[index] }}
          </td>
          <td
            v-else-if="dataJson.status[index] === 'Завершено'"
            class="h-3 px-6 bg-[#91C893] rounded-[43px]"
          >
            {{ dataJson.status[index] }}
          </td>
          <td
            v-if="dataJson.status[index] === 'Идет'"
            class="h-3 px-6 bg-[#FFDAA1] rounded-[43px]"
          >
            {{ dataJson.status[index] }}
          </td>
          <td class="px-6 py-4">{{ dataJson.module[index] }}</td>
          <td class="px-6 py-4">{{ dataJson.type[index] }}</td>
          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >{{ dataJson.room[index] }}
            </a>
          </td>

          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >{{ dataJson.group[index] }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
