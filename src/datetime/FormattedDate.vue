<template>
  <div>
    {{ formattedDate }}
  </div>
</template>

<script>
export default {
  name: "FormattedDate",
  props: {
    format: {
      type: String,
      default: "YYYY-MM-DD",
    },
    date: {
      type: Date,
      required: true,
    },
    locale: {
      type: String,
      required: false,
    },
  },
  computed: {
    formattedDate() {
      const options = this.parseDateFormat(this.format);
      const locale = this.locale ? this.locale : "en-US";

      return new Intl.DateTimeFormat(locale, options).format(this.date);
    },
  },
  methods: {
    parseDateFormat(format) {
      // Map format string to Intl.DateTimeFormat options
      const options = {};
      if (format.includes("YYYY")) options.year = "numeric";
      if (format.includes("MM")) options.month = "2-digit";
      if (format.includes("DD")) options.day = "2-digit";
      if (format.includes("HH")) options.hour = "2-digit";
      if (format.includes("mm")) options.minute = "2-digit";
      if (format.includes("ss")) options.second = "2-digit";
      return options;
    },
  },
};
</script>
