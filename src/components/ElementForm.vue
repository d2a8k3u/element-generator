<script setup lang="ts">
import type { ElementProperties } from '@/types/element';
import { useField, useForm } from 'vee-validate';
import { useElementStore } from '@/stores/element';
import { units } from '@/common/units';
import yup from '@/common/validation';
import FormInput from '@/components/FormInput.vue';
import FormSubmit from '@/components/FormSubmit.vue';
import FormSelect from '@/components/FormSelect.vue';

const elementStore = useElementStore();

const unitOptions = units;

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: yup
    .object({
      height: yup.number().required('This field is required').min(50).max(500).defined(),
      heightUnit: yup.string().required('This field is required').defined(),
      width: yup.number().required('This field is required').min(50).max(500).defined(),
      widthUnit: yup.string().required('This field is required').defined(),
      // @ts-ignore
      backgroundColor: yup.string().testColorValidation('This is not a color'),
      description: yup.string().notRequired(),
    })
    .defined(),
  initialValues: {
    backgroundColor: 'black',
    heightUnit: unitOptions[0].value,
    widthUnit: unitOptions[0].value,
  },
});

const { value: height, errorMessage: heightError } = useField<number>('height');
const { value: heightUnit, errorMessage: heightUnitError } = useField<string>('heightUnit');
const { value: width, errorMessage: widthError } = useField<number>('width');
const { value: widthUnit, errorMessage: widthUnitError } = useField<string>('widthUnit');
const { value: backgroundColor, errorMessage: backgroundColorError } = useField<string>('backgroundColor');
const { value: description, errorMessage: descriptionError } = useField<string>('description');

const submitForm = handleSubmit((values) => {
  elementStore.saveElement(values as ElementProperties);
});
</script>

<template>
  <form class="mb-8" @submit.prevent="submitForm">
    <div class="grid grid-cols-3 gap-4 mb-5">
      <div class="col-span-2">
        <FormInput
          v-model="height"
          label="Element height"
          id="element-height"
          name="element-height"
          placeholder="Input element height"
          type="number"
          :error-message="heightError"
          required
        />
      </div>

      <div class="col-span-1">
        <FormSelect
          v-model="heightUnit"
          label="Height unit selection"
          id="height-unit"
          name="height-unit"
          :options="unitOptions"
          :error-message="heightUnitError"
        ></FormSelect>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-5">
      <div class="col-span-2">
        <FormInput
          v-model="width"
          label="Element width"
          id="element-width"
          name="element-width"
          placeholder="Input element width"
          type="number"
          :error-message="widthError"
          required
        />
      </div>

      <div class="col-span-1">
        <FormSelect
          v-model="widthUnit"
          label="Width unit selection"
          id="width-unit"
          name="width-unit"
          :options="unitOptions"
          :error-message="widthUnitError"
        ></FormSelect>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 mb-5">
      <div class="col-span-1">
        <FormInput
          v-model="backgroundColor"
          label="Element background color"
          id="element-background"
          name="element-background"
          placeholder="Input element background color"
          :error-message="backgroundColorError"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 mb-5">
      <div class="col-span-1">
        <FormInput
          v-model="description"
          label="Element description"
          id="element-description"
          name="element-description"
          placeholder="Input element description"
          :error-message="descriptionError"
        />
      </div>
    </div>

    <div class="text-center">
      <FormSubmit :title="'Get preview'" :loading="isSubmitting" @on-submit="submitForm"></FormSubmit>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
