# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
    - Caching a configuration data of a setup, which is frozen for any changes.
    - Cache data computed from tables, which has very least chance of changes in record. Saves time of computation and extraction from  resources.

### **What *extra* test cases can you add to the test file?**
    - Will store multiple user data, and cache it in fetching.
    - Will store configuration of reports, and cache it.