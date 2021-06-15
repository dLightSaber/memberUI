import request from "../utils/request";

const searchProvider = (payload) => {
  //const url = `/providers?city=${payload.city}&speciality=${payload.speciality}&lastname=${payload.lastName}`;
  let url = `/providers?page=${payload.page}&size=${payload.limit}`;
  if (payload.city && payload.city.length > 0) {
    url = url + "&city=" + payload.city;
  }
  if (payload.speciality && payload.speciality.length > 0) {
    url = url + "&speciality=" + payload.speciality;
  }
  if (payload.lastName && payload.lastName.length > 0) {
    url = url + "&lastname=" + payload.lastName;
  }

  return request({
    url: url,
    method: "get",
  });
};

const ProviderService = {
  searchProvider,
};

export default ProviderService;
