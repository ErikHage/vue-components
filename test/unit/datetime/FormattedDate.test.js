import { shallowMount } from "@vue/test-utils";
import FormattedDate from "../../../src/datetime/FormattedDate.vue";

describe("FormattedDate.vue", () => {
  it("renders a formatted date with default format and locale", () => {
    const date = new Date("2024-12-24T15:30:45");
    const wrapper = shallowMount(FormattedDate, {
      props: { date },
    });
    // Default format is YYYY-MM-DD
    expect(wrapper.text()).toBe("12/24/2024");
  });

  it("renders a formatted date with default format and defined locale", () => {
    const date = new Date("2024-12-24T15:30:45");
    const wrapper = shallowMount(FormattedDate, {
      props: { date, locale: 'en-CA' },
    });
    expect(wrapper.text()).toBe("2024-12-24");
  });

  it("renders a formatted date with a custom format (YYYY-MM-DD HH:mm:ss)", () => {
    const date = new Date("2024-12-24T15:30:45");
    const wrapper = shallowMount(FormattedDate, {
      props: { date, format: "YYYY-MM-DD HH:mm:ss" },
    });
    expect(wrapper.text()).toBe("12/24/2024, 03:30:45 PM");
  });

  it("renders correctly for different formats (MM/DD/YYYY)", () => {
    const date = new Date("2024-12-24T15:30:45");
    const wrapper = shallowMount(FormattedDate, {
      props: { date, format: "MM-DD-YYYY" },
    });
    expect(wrapper.text()).toBe("12-24-2024");
  });
});
