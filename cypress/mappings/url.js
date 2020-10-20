const urlMappings = new Map([['Home', 'https://www.google.co.uk/']]);

export default (mappingName) => {
  if (!urlMappings.has(mappingName)) {
    throw new Error(`Mapping [${mappingName}] does not exist`);
  }

  return urlMappings.get(mappingName);
};
