"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cfnspec = require("../lib");
test('spot-check DynamoDB metrics', () => {
    const metrics = cfnspec.cannedMetricsForService('AWS::DynamoDB');
    expect(metrics.length).toBeGreaterThan(0);
    const resLatency = metrics.find(m => m.metricName === 'SuccessfulRequestLatency');
    expect(resLatency).toBeTruthy();
    expect(resLatency?.dimensions).toEqual([['Operation', 'TableName']]);
});
test('spot-check MediaStore metrics', () => {
    const metrics = cfnspec.cannedMetricsForService('AWS::MediaStore');
    expect(metrics.length).toBeGreaterThan(0);
});
/**
 * Test that we can read canned metrics for all namespaces in the spec without throwing an error
 */
for (const _namespace of cfnspec.namespaces()) {
    const namespace = _namespace;
    test(`Validate canned metrics for ${namespace}`, () => {
        const metrics = cfnspec.cannedMetricsForService(namespace);
        // Check that there are no duplicates in these list (duplicates may occur because of duplicate
        // dimensions, but those have readly been combined).
        const uniqueMetricNames = new Set(metrics.map(m => `${m.namespace}/${m.metricName}`));
        expect(uniqueMetricNames.size).toEqual(metrics.length);
    });
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FubmVkLW1ldHJpY3MudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbm5lZC1tZXRyaWNzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBa0M7QUFFbEMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUN2QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssMEJBQTBCLENBQUMsQ0FBQztJQUNsRixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFaEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLE1BQU0sVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtJQUM3QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFDN0IsSUFBSSxDQUFDLCtCQUErQixTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUU7UUFDcEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNELDhGQUE4RjtRQUM5RixvREFBb0Q7UUFDcEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7Q0FDSjtBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZm5zcGVjIGZyb20gJy4uL2xpYic7XG5cbnRlc3QoJ3Nwb3QtY2hlY2sgRHluYW1vREIgbWV0cmljcycsICgpID0+IHtcbiAgY29uc3QgbWV0cmljcyA9IGNmbnNwZWMuY2FubmVkTWV0cmljc0ZvclNlcnZpY2UoJ0FXUzo6RHluYW1vREInKTtcbiAgZXhwZWN0KG1ldHJpY3MubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4oMCk7XG5cbiAgY29uc3QgcmVzTGF0ZW5jeSA9IG1ldHJpY3MuZmluZChtID0+IG0ubWV0cmljTmFtZSA9PT0gJ1N1Y2Nlc3NmdWxSZXF1ZXN0TGF0ZW5jeScpO1xuICBleHBlY3QocmVzTGF0ZW5jeSkudG9CZVRydXRoeSgpO1xuXG4gIGV4cGVjdChyZXNMYXRlbmN5Py5kaW1lbnNpb25zKS50b0VxdWFsKFtbJ09wZXJhdGlvbicsICdUYWJsZU5hbWUnXV0pO1xufSk7XG5cbnRlc3QoJ3Nwb3QtY2hlY2sgTWVkaWFTdG9yZSBtZXRyaWNzJywgKCkgPT4ge1xuICBjb25zdCBtZXRyaWNzID0gY2Zuc3BlYy5jYW5uZWRNZXRyaWNzRm9yU2VydmljZSgnQVdTOjpNZWRpYVN0b3JlJyk7XG4gIGV4cGVjdChtZXRyaWNzLmxlbmd0aCkudG9CZUdyZWF0ZXJUaGFuKDApO1xufSk7XG5cbi8qKlxuICogVGVzdCB0aGF0IHdlIGNhbiByZWFkIGNhbm5lZCBtZXRyaWNzIGZvciBhbGwgbmFtZXNwYWNlcyBpbiB0aGUgc3BlYyB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yXG4gKi9cbmZvciAoY29uc3QgX25hbWVzcGFjZSBvZiBjZm5zcGVjLm5hbWVzcGFjZXMoKSkge1xuICBjb25zdCBuYW1lc3BhY2UgPSBfbmFtZXNwYWNlO1xuICB0ZXN0KGBWYWxpZGF0ZSBjYW5uZWQgbWV0cmljcyBmb3IgJHtuYW1lc3BhY2V9YCwgKCkgPT4ge1xuICAgIGNvbnN0IG1ldHJpY3MgPSBjZm5zcGVjLmNhbm5lZE1ldHJpY3NGb3JTZXJ2aWNlKG5hbWVzcGFjZSk7XG5cbiAgICAvLyBDaGVjayB0aGF0IHRoZXJlIGFyZSBubyBkdXBsaWNhdGVzIGluIHRoZXNlIGxpc3QgKGR1cGxpY2F0ZXMgbWF5IG9jY3VyIGJlY2F1c2Ugb2YgZHVwbGljYXRlXG4gICAgLy8gZGltZW5zaW9ucywgYnV0IHRob3NlIGhhdmUgcmVhZGx5IGJlZW4gY29tYmluZWQpLlxuICAgIGNvbnN0IHVuaXF1ZU1ldHJpY05hbWVzID0gbmV3IFNldChtZXRyaWNzLm1hcChtID0+IGAke20ubmFtZXNwYWNlfS8ke20ubWV0cmljTmFtZX1gKSk7XG4gICAgZXhwZWN0KHVuaXF1ZU1ldHJpY05hbWVzLnNpemUpLnRvRXF1YWwobWV0cmljcy5sZW5ndGgpO1xuICB9KTtcbn07Il19