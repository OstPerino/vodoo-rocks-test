<template>
  <div class="input-container flex flex-col">
    <label class="text-gray-600 ml-2 mb-1">{{ label }}</label>
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInputHandler"
      class="py-2 pl-2 outline-none"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref<string>("");

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "Поиск",
  },
  placeholder: {
    type: String,
    default: "Введите имя автора",
  },
  inputType: {
    type: String,
    default: "text",
  },
});

const onInputHandler = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<style scoped></style>
