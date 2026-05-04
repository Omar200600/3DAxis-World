/* 
   3D Axis World - AI Orchestrator
   This file manages the distributed intelligence between Gemini, Grok, and Llama.
*/

const AIConfig = {
    // محرك البحث والتحليل العميق (للتعليم والفيزياء)
    primaryAI: "Gemini", 
    
    // محرك الشفافية والبيانات الاقتصادية اللحظية (للعقود والرسوم)
    realTimeAI: "Grok", 
    
    // محرك الأمان المفتوح (يعمل في حال انقطاع الإنترنت أو الأعطال)
    backupAI: "Llama-Local",

    // تحديد حالة النظام
    isOnline: navigator.onLine
};

function dispatchTask(taskType) {
    console.log("3D Axis AI is processing: " + taskType);
    
    if (!AIConfig.isOnline) {
        return "Switching to Llama-Local: Providing offline assistance for students.";
    }

    switch(taskType) {
        case 'Education':
            return "Using Gemini: Analyzing Physics/Chemistry data for student.";
        case 'Market':
            return "Using Grok: Checking real-time market rates for tenant contracts.";
        default:
            return "Using Primary AI to handle general request.";
    }
}

// مراقبة حالة الإنترنت باستمرار لضمان عدم توقف المشروع
window.addEventListener('offline', () => {
    AIConfig.isOnline = false;
    console.warn("Project is now in Offline Mode. Backup AI activated.");
});
