const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // 打开教师控制台
    openTeacherConsole: () => ipcRenderer.send('open-teacher-console'),
    // 刷新学生端
    refreshStudent: () => ipcRenderer.send('refresh-student'),
    // 向学生端发送指令
    sendToStudent: (message) => ipcRenderer.send('send-to-student', message),
    // 监听教师端指令（学生端使用）
    onTeacherCommand: (callback) => ipcRenderer.on('teacher-command', callback)
});
