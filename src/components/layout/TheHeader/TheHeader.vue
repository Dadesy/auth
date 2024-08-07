<template>
  <header>
    <div class="navbar bg-base-100 text-slate-800">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Добро пожаловать {{ email }}</a>
      </div>

      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar placeholder"
        >
          <div class="bg-slate-800 text-neutral-content rounded-full w-12">
            <span class="text-xl text-white leading-none">
              {{ getReduction }}
            </span>
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg w-52"
        >
          <li>
            <span class="text-rose-500 cursor-pointer hover:bg-gray-100"
              @click="logout"
            >
              Выйти
            </span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./TheHeader.ts"/>
