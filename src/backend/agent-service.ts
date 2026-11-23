```diff
@@ -1,3 +1,4 @@
+// OpenBot Bot Status Field Improvement
+// Add status tracking for bot health/availability
+
 // Existing bot profile definition
 export interface BotProfile {
   id: string;
   name: string;
   model: string;
   provider: string;
   accessLevel: string;
+  status: number;  // 1=online, 2=offline, 3=busy
   notifications: boolean;
   busyMessageMode: string;
 }
```